class ChangeAgeOnDoctors < ActiveRecord::Migration
  def change
    change_column :doctors, :age, :string
  end
end
