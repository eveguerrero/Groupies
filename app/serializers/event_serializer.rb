class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :starttime, :endtime, :group_id, :image
  belongs_to :groups
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
