class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :password, :password_confirmation, :name, :image, :bio

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
