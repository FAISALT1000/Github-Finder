class Github {
  constructor() {
    this.client_id = '2be9374e1aa7a7964518';
    this.client_secret = '9359a286be71573ebef2674fc9f1d31ac316ab81';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }/****/
}