enum LoungeChartErrorType {
    NoData
}

export class LoungeChartError extends Error {
    readonly type: LoungeChartErrorType

    private constructor(options: {
        type: LoungeChartErrorType
        message: string
    }) {
        super(options.message)
        this.type = options.type
    }

    static noData(): LoungeChartError {
        return new LoungeChartError({
            type: LoungeChartErrorType.NoData,
            message: 'No data.'
        })
    }
}
