export type UniqueId = string;

export function newUniqueId(): UniqueId {
    return `id${Math.random().toString(16).slice(2)}`;
}