def count_vowels(text):
    """
    Count the number of vowels in a given string.
    
    Args:
        text (str): The input string to count vowels from
        
    Returns:
        int: The total number of vowels (a, e, i, o, u) in the string
    """
    # Define vowels (both lowercase and uppercase)
    vowels = "aeiouAEIOU"
    
    # Count vowels in the string
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    
    return count


# Example usage
if __name__ == "__main__":
    # Test the function with some examples
    test_strings = [
        "Hello World",
        "Python Programming",
        "AEIOU aeiou",
        "xyz",
        "The quick brown fox jumps over the lazy dog"
    ]
    
    for text in test_strings:
        vowel_count = count_vowels(text)
        print(f"'{text}' has {vowel_count} vowels")