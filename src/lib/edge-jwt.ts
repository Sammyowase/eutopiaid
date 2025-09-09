export function verifyJwtForEdge(token: string): boolean {
  try {
    // Split the token into parts
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }

    // Decode the payload (middle part)
    const payload = JSON.parse(
      Buffer.from(parts[1], 'base64').toString()
    );

    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('JWT verification error:', error);
    return false;
  }
}