class EventSerializer < ActiveModel::Serializer
  attributes :id, :theme, :date
  has_many :milestones
  has_many :vendors
end
