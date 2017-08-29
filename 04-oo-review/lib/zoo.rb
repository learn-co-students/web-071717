class Animal
  # An animal belongs to a location
  attr_accessor :species, :location # Remember that the attr_accessors correspond to a name of a column on our table.

  @@all = []

  def self.all
    @@all
  end

  def initialize(species)
    @species = species
    self.class.all << self # this line is the same as saying '@@all << self', but using the class method 'self.all' helps us maintain our program if we changed the class variable from @@all to @@animals. If we use the class variable in many places in our program, we'll have to find all of those and change each one. If we use the method, we only need to change the class variable name inside of the method.
  end


end

class Location
  # A location has many animals, has many zookeepers, and has many climates
  attr_accessor :name

  @@all = []

  def self.all
    @@all
  end
  def initialize(name)
   @name = name

  self.class.all << self
  end

  def add_animal(animal)
    animal.location = self
  end

  def animals
    Animal.all.select { |animal | animal.location == self }
  end

end

class Climate
  # A climate has many locations

  attr_accessor :name
  @@all = []

  def self.all
    @@all
  end

  def initialize(name)
    @name = name
    self.class.all << self
  end

  def locations
    # For this example, let's say our Climate instance is called "winter."
    # To find the locations of a climate, we loop through all of the LocationClimate instances and filter them out: we only want the ones where the climate matches "winter".
    location_climates = LocationClimate.all.select do |loc_cli|
      loc_cli.climate == self
    end
    # At this point, location_climates is an array of LocationClimate instances, all of which have a climate equal to "winter".
    # Now, we want to loop through each of these instances and ask it to return its location.
    # We're able to do this because "location" is a getter method on our LocationClimate instances (in attr_accessor).
    locations = location_climates.map do |location_climate|
      location_climate.location
    end
    # At this point, locations is an array of locations. These locations we found through the LocationClimate all method, and all corresponded to our climate "winter".

    locations
  end

end


class LocationClimate
  #LocationClimate belongs to a location and belongs to a climate.
  attr_accessor :location, :climate
  @@all = []

  def self.all
    @@all
  end

  def initialize(location, climate)
    @location = location
    @climate = climate
    self.class.all << self
  end

end

class Zookeeper
  # A Zookeeper belongs to a location.
  attr_accessor :name, :location

    @@all = []

    def self.all
      @@all
    end

    def initialize(name, location)
      @name = name
      @location = location
      self.class.all << self
    end

    def animals
      binding.pry # You can use pry in your program to find out what's happening inside of your methods.
      self.location.animal
    end
end
