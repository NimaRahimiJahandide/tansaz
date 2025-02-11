export const dateFormatter = (date: string | undefined) => {
    const formattedDate = useTimeAgo(date!);
    return formattedDate.value;
};
