import { faLink, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '@lib/utils';
import Badge from './Badge';
import SocialSharing from '@components/SocialSharing';
import { useRouter } from 'next/router';

const HelplineCard = ({
    category,
    createdTime,
    description,
    district,
    phone1,
    source,
    slink,
    state,
    subCategory,
    lastVerifiedOn,
    verificationStatus,
    name
}) => {
    const { asPath } = useRouter();
    const pageUrl = `https://liferesources.in${asPath}`;
    const copyText = ` Name: ${name ? name : 'Helpline'} \n Contact: ${phone1}`;
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="w-full flex items-center pt-2">
                <div className="ml-auto">
                    <SocialSharing
                        url={pageUrl}
                        twitterText={`${copyText} More Info: ${pageUrl}`}
                        copyText={copyText}
                    />
                </div>
            </div>
            <div className="p-4 flex justify-between flex-col md:flex-row">
                <div>
                    <div className="font-bold text-2xl">
                        <div>
                            <h1 className="flex items-center justify-start dark:text-white">
                                {name ? name : 'Helpline'}
                            </h1>
                        </div>
                        <div className="flex items-center text-sm uppercase mt-3 text-gray-700 font-semibold dark:text-white">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mr-2" />
                            <span className="mr-2">{district}</span>|
                            <span className="ml-2">{state}</span>
                        </div>
                        <div className="w-11/12 max-w-3xl my-2">
                            <div className="text-sm">{source}</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row justify-between md:flex-col">
                    {phone1 && (
                        <a
                            className="flex items-center text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white"
                            href={`tel:${phone1}`}>
                            <FontAwesomeIcon
                                title={`${phone1}`}
                                className="w-4"
                                icon={faPhoneAlt}
                            />
                            <span className="ml-2">{phone1}</span>
                        </a>
                    )}
                    {slink && (
                        <a
                            className="flex items-center text-gray-700 font-bold text-xl hover:text-gray-900 dark:text-white"
                            target="_blank"
                            href={slink}>
                            <FontAwesomeIcon title={`${slink}`} className="w-4" icon={faLink} />
                            <span className="ml-2 text-base mt-1">Source Link</span>
                        </a>
                    )}
                    <Badge badgeType={verificationStatus || 'unverified'} />
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center mx-2 px-2 mt-2 pb-3">
                <div className="font-semibold">{description}</div>
                <div className="text-gray-700 text-sm dark:text-white">
                    {lastVerifiedOn && (
                        <div className="text-gray-700 text-xs dark:text-white">
                            <div>
                                <span>
                                    {isVerified(verificationStatus)
                                        ? 'Verified on: '
                                        : 'Checked on: '}
                                </span>
                                <span className="font-bold">{parseDateString(lastVerifiedOn)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HelplineCard;
