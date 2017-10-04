class User < ApplicationRecord
  has_many :books
  has_secure_password
end
