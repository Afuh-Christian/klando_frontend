import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../ReduxStore/Counter/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter_reducer.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}