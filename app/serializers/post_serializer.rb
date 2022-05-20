class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :test_method
  
  def test_method
    return "This is a test calculation"
  end
end
