defmodule HeatTags.Message do
  use Ecto.Schema
  import Ecto.Changeset

  @required_params [:message, :username, :email]

  @derive {Jason.Encoder, only: [:id] ++ @required_params}

  schema "message" do
    field :message, :string
    field :username, :string
    field :email, :string

    timestamps()
  end

  def changeset(params) do
    %__MODULE__{}
    |> cast(params, @required_params)
    |> validate_required(@required_params)
    |> validate_length(:message, max: 140, min: 1)
    |> validate_format(:email, ~r/@/)
  end

end
