class Block
{
    constructor (timestamp, LastHash, hash, data)
    {
        this.timestamp=timestamp;
        this.LastHash=LastHash;
        this.hash=hash;
        this.data=data;
    }

    toString ()
    {
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.LastHash.substring(0, 10)}
        Hash     : ${this.hash.substring(0, 10)}
        Data     : ${this.data}`
    }
}