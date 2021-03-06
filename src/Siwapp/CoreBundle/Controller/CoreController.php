<?php

namespace Siwapp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class CoreController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        $bundles = $this->getParameter('kernel.bundles');
        $url = array_key_exists('SiwappDashboardBundle', $bundles) ? 'dashboard_index' : 'invoice_index';
        return $this->redirect($this->generateUrl($url));
    }
}
