class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
