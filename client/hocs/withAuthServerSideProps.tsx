import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export function withAuthServerSideProps<Q>(
  getServerSidePropsFunc?: GetServerSideProps<Q>
) {
  return async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    
    // Extracts 'request header' info and assigns it to 'response'
    // ingress controller is used to access the server from within the cluster
    const response = await axios.get<CurrentUserResponse>(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: context.req.headers
      }
    );
    console.log('withAuth - response: ', response);
    
    // Extracts 'currentUser' info from 'response' and assigns it to 'props' object 
    // Response properties: data, status, statusText, headers, config, and request
    const {
      data: { currentUser }
    } = response;
    const props = { currentUser };
    console.log('withAuth - props: ', props);

    // Returns prop object if 'getServerSidePropsFunc' is undefined
    console.log('withAuth - getServerSidePropsFunc: ', getServerSidePropsFunc);
    if (!getServerSidePropsFunc) {
      return { props };
    }

    const result = (await getServerSidePropsFunc(context)) as { props: Q };
    console.log('withAuth - results: ', result);
    if (result && result.props) {
      return { props: { ...props, ...result.props } };
    }
  };
}