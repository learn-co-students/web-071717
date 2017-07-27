class AddAgeToDoctors < ActiveRecord::Migration
  def change
    add_column :doctors, :age, :integer
  end
end
