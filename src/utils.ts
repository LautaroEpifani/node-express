import crypto from 'crypto';

const salt = crypto.randomBytes(16).toString('hex');

export function hashPassword(password: string) {
    return crypto.pbkdf2Sync(password, "salt", 1000, 64, 'sha512').toString('hex');
}
