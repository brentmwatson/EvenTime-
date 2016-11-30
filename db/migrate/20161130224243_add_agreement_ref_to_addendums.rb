class AddAgreementRefToAddendums < ActiveRecord::Migration[5.0]
  def change
    add_reference :addendums, :agreement, foreign_key: true
  end
end
