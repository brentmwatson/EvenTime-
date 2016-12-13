class MilestoneSerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :note, :complete
  has_one :event
end
