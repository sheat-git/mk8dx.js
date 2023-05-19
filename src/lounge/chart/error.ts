enum ChartErrorType {
    NoData
}

export class ChartError extends Error {
    readonly type: ChartErrorType

    private constructor(options: {
        type: ChartErrorType
        message: string
    }) {
        super(options.message)
        this.type = options.type
    }

    static noData(): ChartError {
        return new ChartError({
            type: ChartErrorType.NoData,
            message: 'No data.'
        })
    }
}
