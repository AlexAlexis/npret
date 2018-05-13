class CreateProblems < ActiveRecord::Migration[5.1]
  def up
    create_table :problems do |t|
      t.string :name
      t.string :consignmentNote
      t.string :socialNumber
      t.string :passport
      t.text :description
      t.integer :telephoneNumber
      t.boolean :decision, default: false
      t.integer :claimSum
      t.integer :insuranceSum
      t.integer :test12


      t.timestamps
    end
  end
  def down
    drop_table :problems
  end
end
