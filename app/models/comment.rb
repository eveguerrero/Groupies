class Comment < ApplicationRecord
    belogs_to :users 
    belongs_to :posts
    
end
