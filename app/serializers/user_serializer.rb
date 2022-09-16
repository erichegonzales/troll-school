class UserSerializer < ActiveModel::Serializer
  attributes :name, :username, :email, :avatar
end
