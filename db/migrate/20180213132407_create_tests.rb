class CreateTests < ActiveRecord::Migration[5.1]
  def up
    create_table :tests do |t|
      t.string :names
      t.text :comments
      t.timestamps
    end
  end

  def down
    drop_table :tests
  end
end