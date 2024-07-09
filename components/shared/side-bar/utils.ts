export const capitalizeAvatarFallback = (name?: string) => {
  const splittedName = name?.split(" ");
  return `${splittedName?.[0]?.[0] || "A"}${splittedName?.[1]?.[0] || "V"}`.toUpperCase();
};
