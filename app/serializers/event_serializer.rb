class EventSerializer < ActiveModel::Serializer
  attributes :id, :theme, :date, :milestones
  has_many :milestones
end
