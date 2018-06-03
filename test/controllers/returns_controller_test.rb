require 'test_helper'

class ReturnsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get returns_index_url
    assert_response :success
  end

  test "should get show" do
    get returns_show_url
    assert_response :success
  end

  test "should get new" do
    get returns_new_url
    assert_response :success
  end

  test "should get create" do
    get returns_create_url
    assert_response :success
  end

  test "should get edit" do
    get returns_edit_url
    assert_response :success
  end

  test "should get update" do
    get returns_update_url
    assert_response :success
  end

  test "should get delete" do
    get returns_delete_url
    assert_response :success
  end

  test "should get destroy" do
    get returns_destroy_url
    assert_response :success
  end

end
