import Container from "../../atoms/Container"

export default function HowWeUse({ product }) {
  return (
    <div className='bg-[#f8f4f0] py-10'>
        <Container>
          <div className='border-b border-[#c2c6c9]'>
              <div>
                <span className="text-lg tracking-[.04em]">How We Use It</span>
              </div>
              <div className='flex flex-col gap-3 py-8'>
                <h3 className="text-[2rem]">Morning And Night</h3>
                <p className="text-lg">Apply a few drops to clean, toned skin, focusing on areas that you feel need a bit of extra attention.</p>
              </div>
          </div>
          <div className="pt-6">
            <div>
              <p className="font-medium">Complete Your Routine</p>
            </div>
          </div>
        </Container>
    </div>
  )
}
