import React, { lazy, Suspense } from 'react'
const Home = lazy(() => import('./Home'))
const Apicall = lazy(() => import('../forms/Apicall'))
export default class LazyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Lazy  Loading</h1>
                <Suspense fallback={<div>Loading home page.. </div>}>
                    <Home />
                </Suspense>
                <Suspense fallback={<div>Loading apis...</div>}>
                    <Apicall />
                   </Suspense>
            </div>
        )
    }

}