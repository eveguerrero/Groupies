class UserGroupsSerializer < ActiveModel::Serializer
  attributes :user_id, :group_id
  
  has_many :users 
  has_many :groups
end
