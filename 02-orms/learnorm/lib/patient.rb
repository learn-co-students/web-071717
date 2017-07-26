class Patient
  attr_accessor :name, :condition

  def initialize(id=nil, name, condition)
    @name = name
    @condition = condition
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY,
        name TEXT,
        condition TEXT
      )
    SQL
    DB[:conn].execute(sql)
  end

  def self.drop_table
    DB[:conn].execute("DROP TABLE patients")
  end





end
