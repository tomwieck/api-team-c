import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql'
});

class Cache extends Model {
  public key!: string;
  public value!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cache.init({
  key: DataTypes.STRING,
  value: DataTypes.STRING
}, { sequelize, modelName: 'cache' });

(async () => {
  await sequelize.sync();

  const keyToFind = 'myKey';
  const cacheRecord = await Cache.findOne({
    where: { key: keyToFind }
  });

  if (!cacheRecord) {
    console.log(`Cache record with key "${keyToFind}" not found`);
  } else if (Date.now() - cacheRecord.updatedAt.getTime() > 4 * 60 * 60 * 1000) {
    console.log(`Cache record with key "${keyToFind}" was last modified more than 4 hours ago`);
    // Perform some action to refresh the cache, e.g. fetch data from an API and save to the cache
  } else {
    console.log(`Cache record with key "${keyToFind}" found: ${cacheRecord.value}`);
  }
})();
