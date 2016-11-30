require "refile"
require "refile/s3"

Refile.configure do |config|
  connection = lambda { |&blk| ActiveRecord::Base.connection_pool.with_connection { |con| blk.call(con.raw_connection) } }
  config.store = Refile::Postgres::Backend.new(connection)
end

# aws = {
#   access_key_id: "xyz",
#   secret_access_key: "abc",
#   region: "sa-east-1",
#   bucket: "my-bucket",
# }
# Refile.cache = Refile::S3.new(prefix: "cache", **aws)
# Refile.store = Refile::S3.new(prefix: "store", **aws)
