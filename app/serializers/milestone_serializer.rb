class MilestoneSerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :note, :complete
end
