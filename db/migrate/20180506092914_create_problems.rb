class CreateProblems < ActiveRecord::Migration[5.1]
  def up
    create_table :problems do |t|
      t.string :name, default: false
      t.string :consignmentNote, limit: 15
      t.string :socialNumber, limit: 15
      t.string :passport
      t.text :description
      t.integer :telephoneNumber
      t.boolean :decision, default: false
      t.integer :claimSum
      t.integer :insuranceSum


      t.timestamps
    end
  end
  def down
    drop_table :problems
  end
end
