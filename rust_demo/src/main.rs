use std::io;

fn count_vowels(input: &str) -> usize {
    let vowels = "AEIOUaeiou";
    input.chars().filter(|&c| vowels.contains(c)).count()
}

fn main() {
    println!("Type a string:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Error");

    let num_vowels = count_vowels(&input);
    println!("Number of vowels: {}", num_vowels);
}