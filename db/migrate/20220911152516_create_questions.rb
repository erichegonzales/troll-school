class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.integer :question_number
      t.string :content
      t.string :correct_answer
      t.references :quiz, null: false, foreign_key: true

      t.timestamps
    end
  end
end
