const { google } = require('googleapis');
const { setCredentials, getAuthClient } = require('./googleAuth');

// Get tomorrow's events from Google Calendar
async function getTomorrowEvents(tokens) {
  setCredentials(tokens);
  const calendar = google.calendar({ version: 'v3', auth: getAuthClient() });
  
  // Calculate tomorrow's date range
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
  
  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: tomorrow.toISOString(),
      timeMax: dayAfterTomorrow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 50
    });
    
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw error;
  }
}

// Format event time for display
function formatEventTime(event) {
  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  if (event.start.dateTime) {
    const startTime = formatTime(event.start.dateTime);
    const endTime = formatTime(event.end.dateTime);
    return `${startTime} - ${endTime}`;
  } else {
    return 'All day';
  }
}

// Generate natural language summary of events
function generateEventSummary(events) {
  if (events.length === 0) {
    return "You have no events scheduled for tomorrow. Enjoy your free day!";
  }
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayName = tomorrow.toLocaleDateString('en-US', { weekday: 'long' });
  const dateStr = tomorrow.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  
  let summary = `Here's your schedule for tomorrow, ${dayName}, ${dateStr}:\n\n`;
  
  // Group events by time
  const allDayEvents = events.filter(e => !e.start.dateTime);
  const timedEvents = events.filter(e => e.start.dateTime);
  
  // Add all-day events
  if (allDayEvents.length > 0) {
    summary += "All-day events:\n";
    allDayEvents.forEach(event => {
      summary += `• ${event.summary || 'Untitled event'}`;
      if (event.location) summary += ` (at ${event.location})`;
      summary += '\n';
    });
    summary += '\n';
  }
  
  // Add timed events
  if (timedEvents.length > 0) {
    summary += "Scheduled events:\n";
    timedEvents.forEach(event => {
      const time = formatEventTime(event);
      summary += `• ${time}: ${event.summary || 'Untitled event'}`;
      if (event.location) summary += ` (at ${event.location})`;
      if (event.description) {
        const shortDesc = event.description.split('\n')[0].substring(0, 50);
        summary += ` - ${shortDesc}${event.description.length > 50 ? '...' : ''}`;
      }
      summary += '\n';
    });
  }
  
  // Add a helpful closing
  const eventCount = events.length;
  summary += `\nYou have ${eventCount} ${eventCount === 1 ? 'event' : 'events'} scheduled for tomorrow.`;
  
  // Check for busy periods
  const morningEvents = timedEvents.filter(e => {
    const hour = new Date(e.start.dateTime).getHours();
    return hour >= 6 && hour < 12;
  });
  
  const afternoonEvents = timedEvents.filter(e => {
    const hour = new Date(e.start.dateTime).getHours();
    return hour >= 12 && hour < 17;
  });
  
  const eveningEvents = timedEvents.filter(e => {
    const hour = new Date(e.start.dateTime).getHours();
    return hour >= 17;
  });
  
  if (morningEvents.length >= 3) {
    summary += " Your morning looks busy!";
  } else if (afternoonEvents.length >= 3) {
    summary += " Your afternoon is packed!";
  } else if (eveningEvents.length >= 2) {
    summary += " You have a busy evening ahead!";
  }
  
  return summary;
}

module.exports = {
  getTomorrowEvents,
  generateEventSummary,
  formatEventTime
};