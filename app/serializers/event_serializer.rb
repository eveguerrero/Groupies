class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start, :end, :group_id, :image
  


  # def image
  #   rails_blob_path(object.image, only_path: true) if object.image.attached?
  # end
end
