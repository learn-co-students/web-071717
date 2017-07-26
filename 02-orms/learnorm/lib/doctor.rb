class Doctor
  attr_accessor :id, :name, :specialty

  def initialize(id=nil, name, specialty)
    @id = id
    @name = name
    @specialty = specialty
  end


  def self.create(name:, specialty:)
    doctor = self.new(name, specialty)
    doctor.save
    doctor
  end

  def save
    sql = <<-SQL
      INSERT INTO doctors (name, specialty)
      VALUES (?, ?)
    SQL
    result = DB[:conn].execute(sql, name, specialty)
    @id = DB[:conn].execute("SELECT last_insert_rowid() from doctors")[0][0]
  end


  def self.find(id)
    # SELECT * FROM doctors WHERE id = ?
    sql = <<-SQL
      SELECT * FROM doctors
      WHERE id = ?
    SQL
    result = DB[:conn].execute(sql, id)[0]
    doctor = create_from_db(result)
  end

  def self.create_from_db(result)
    self.new(result[0], result[1], result[2])
  end


  # IF MERYL EXISTS IN THE DB THEN RETURN AN INSTANCE WITH THAT INFO
  # IF NOT THEN CREATE IN THE DB OUR NEW RECORD
  def self.find_by_or_create(name:, specialty:)

    sql = <<-SQL
      SELECT * FROM doctors
      WHERE name = ? AND specialty = ?
    SQL

    result = DB[:conn].execute(sql, name, specialty)
    if result.empty?
      self.create(name: name, specialty: specialty)
    else
      result_data = result.map{ |doctor_result| self.create_from_db(doctor_result) }
    end
    # SQL -> SELECT * FROM doctors WHERE name = MERYL AND specialty = "CHIEF OF SURGERY" -> BUT WAIT THERES MORE WHAT IF MERYL DOES NOT EXIST


  end



  def update
    # UPDATE doctors SET name = "Same name", specialty = "new specialty" WHERE id = "self.id"
    sql = <<-SQL
      UPDATE doctors
      SET name = ?, specialty = ?
      WHERE id = ?
    SQL
    DB[:conn].execute(sql, self.name, self.specialty, self.id)
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY,
        name TEXT,
        specialty TEXT
      )
    SQL
    DB[:conn].execute(sql)
    "DOCTORS TABLE CREATED"
  end

  def self.drop_table
    DB[:conn].execute("DROP TABLE doctors")
  end





end
