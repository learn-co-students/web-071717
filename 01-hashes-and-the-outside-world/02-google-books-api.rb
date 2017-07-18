require 'pry'
require 'rest-client'
require 'json'

# Write an application that takes some user input

def get_user_input
  puts 'Welcome to Google Books Searcher'
  puts 'Enter a search term:'
  gets.chomp
end

def fetch_books(term)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{term}"

  response = RestClient.get(url)

  data_string = response.body

  book_data = JSON.parse(data_string)
end

def title(book)
  book["volumeInfo"]["title"]
end

def authors(book)
  if book["volumeInfo"]["authors"]
    book["volumeInfo"]["authors"].join(" and ")
  else
    'No Authors Found'
  end
end

def description(book)
  book["volumeInfo"]["description"][0..100] + '...'
end


def print_books(book_data)
  book_data["items"].each do |book|
    puts "*" * 30
    puts "Title: #{title(book)}"
    puts "Author: #{authors(book)}"
    puts "Description: #{description(book)}"
  end
end


def run
  term = get_user_input
  # hit the google books api
  book_data = fetch_books(term)

  print_books(book_data)
end


run







# and display the title author and description of the first 10 books
