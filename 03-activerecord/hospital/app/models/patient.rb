class Patient < ActiveRecord::Base
end


class Cat

  @@all = []
  attr_accessor :name

  def initialize(name)
    @name = name
    binding.pry
  end

  def self.all
    @@all
  end

end
