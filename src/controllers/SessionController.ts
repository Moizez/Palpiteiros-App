import AsyncStorage from '@react-native-async-storage/async-storage'
class SessionController {
  public async create(key: string, object: object): Promise<object | []> {
    const isCheck = await this.checkSession(key);

    if (isCheck) {
      await this.remove(key);
    }

    await AsyncStorage.setItem(key, JSON.stringify(object));

    return this.get(key);
  }

  public async get(key): Promise<object | []> {
    return (await JSON.parse(await AsyncStorage.getItem(key))) || [];
  }

  private async checkSession(key): Promise<boolean> {
    const session = await this.get(key);
    if (Object.keys(session).length > 0) {
      return true;
    }
    return false;
  }

  public async remove(key): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  public async clear(): Promise<void> {
    await AsyncStorage.clear();
  }
}

export default new SessionController();
