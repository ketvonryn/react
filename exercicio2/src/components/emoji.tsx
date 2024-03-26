type Props = {
    rate: number
}

export const EmojiRating = ({rate}: Props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate)
    let emojis = ['', '😢', '😐', '🙂', '😊', '😁']
    
    let stars = emojis[rateInt].repeat(rateInt) + '😶'.repeat(5-rateInt)

    return (
        <div>
            <div className="flex justify-center p-5">{rate.toFixed(1)}</div>
            <div>{stars}</div>
            
        </div>
    )
}