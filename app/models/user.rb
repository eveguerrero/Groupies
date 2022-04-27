class User < ApplicationRecord
    has_many :comments
    has_many :posts
    has_secure_password
    has_one_attached :image
    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 10, maximum: 64}
end
