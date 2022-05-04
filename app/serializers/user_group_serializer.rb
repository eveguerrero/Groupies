class UserGroupSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :name, :image, :bio
  has_many :groups
end
