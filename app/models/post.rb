class Post < ApplicationRecord
    belongs_to :groups
    belongs_to :users
    has_many :coments
end
