defmodule HeatTags.Repo.Migrations.CreateMessage do
  use Ecto.Migration

  def change do
    create table(:message) do
      add :message, :string
      add :username, :string
      add :email, :string

      timestamps()
    end
  end
end
