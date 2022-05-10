class Event < ApplicationRecord
    belongs_to :groups 
    has_one_attached :image
end
